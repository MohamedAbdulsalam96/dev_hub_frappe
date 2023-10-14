# dev_hub_frappe
**frappe developers hub >>>**

*This is container for all the codes and materials related to the Frappe framework & Scripts that I use on a daily basis.*
*I hope this repository will be helpful for developers who want to Coding and write scripts to interact with Frappe components..*
*Please, If you find any errors or need corrections in any of the files, please submit a pull request and I will review and merge it.*
-----
## How can you browse repository files and information comfortably and usefully?
* Most of the files in this repository are written in MarkDown files and format.
### >> You can use the GitHub platform itself. It provides good display of .md files
**or**
### >> using Mkdocs

## using Mkdocs : 
- To use Mkdocs, Follow these steps:>>

**1) first: You need to create a python environment.**
  ```sh
  # windows
  py -m venv venv --prompt "mkdocs"

  # linux and mac
  python3 -m venv venv --prompt "mkdocs"
  ```

**2) Then: Activate the newly created environment using the following command**
  ```sh
  # windows
  .\venv\Scripts\activate

  # linux and mac
  source venv/bin/activate
  ```

**3) Install the requirements using the following command**
  ```sh
  pip install -r requirements.txt
  ```
    - `requirements.txt` file contains material-mkdocs which is a theme used with Mkdocs.

**4) Finally: run the server use the following command**
  ```sh
  mkdocs serve
  ```
**Enjoy!**
