'''
This script syncs all files from the WAVS foundry template
and pulls them into the current repo. This avoid duplicate documentation.
Source of truth remains upstream in the template.

This repo serves only as the styling and frontend. all copy remains elsewhere
'''
import os
import shutil

# TODO: change to a workflow with ability to select the branch to sync from
# + document
SOURCE='/home/reece/Desktop/Programming/Rust/wavs-foundry-template/docs'
DEST='./content/docs'

def main():
    copy_files(SOURCE, DEST)


def copy_files(source_dir, destination_dir):
    # Create the destination directory if it doesn't exist
    if not os.path.exists(destination_dir):
        os.makedirs(destination_dir)

    # Get all items in the source directory
    items = os.listdir(source_dir)

    # Copy each file
    for item in items:
        source_path = os.path.join(source_dir, item)
        destination_path = os.path.join(destination_dir, item)

        # Check if it's a file
        if os.path.isfile(source_path):
            returnPath = shutil.copy2(source_path, destination_path)

            file_content = open(returnPath, 'r').read()
            new_content = check_if_commented_import_line(file_content)

            # save new_content to destination path file
            os.remove(returnPath) # TODO: or just write over it?
            with open(returnPath, 'w') as f:
                f.write(new_content)

            print(f"Copied: {item}")
        # If it's a directory, you might want to copy it recursively
        elif os.path.isdir(source_path):
            shutil.copytree(source_path, destination_path, dirs_exist_ok=True)
            print(f"Copied directory: {item}")


# Iterates through the mdx files and checks if the line is a commented import statement. i.e. `import { Callout } from 'fumadocs-ui/components/callout';`
# if so, it will uncomment it in the file
# <!--import { Callout } from 'fumadocs-ui/components/callout';--> becomes import { Callout } from 'fumadocs-ui/components/callout';
def check_if_commented_import_line(fileContent) -> str:
    lines = fileContent.split('\n')
    for i, line in enumerate(lines):
        # does not account for multi line imports, out of scope for now.
        if '<!--' in line and 'import' in line:
            lines[i] = line.replace('<!--', '').replace('-->', '')

    return '\n'.join(lines)


if __name__ == '__main__':
    main()
