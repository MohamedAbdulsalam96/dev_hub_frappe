# Frappe-v13-Installation Guide | 
<!-- ubuntu 18,20,22 -->

## Pre-requisites

    Python 3.10+
    Node.js 14+
    Redis 5                                       (caching and real time updates)
    MariaDB 10.3.x / Postgres 9.5.x               (to run database driven apps)
    yarn 1.12+                                    (js dependency manager)
    pip 20+                                       (py dependency manager)
    wkhtmltopdf (version 0.12.5 with patched qt)  (for pdf generation)
    cron                                          (bench's scheduled jobs: automated certificate renewal, scheduled backups)
    NGINX                                         (proxying multitenant sites in production)

### STEP 1 Install git

*Git is the most commonly used version control system. Git tracks the changes you make to files, so you have a record of what has been done, and you can revert to specific versions should you ever need to. Git also makes collaboration easier, allowing changes by multiple people to all be merged into one source.*

    sudo apt-get install git
    
### STEP 2 install python-dev

*python-dev is the package that contains the header files for the Python C API, which is used by lxml because it includes Python C extensions for high performance.*
    
    sudo apt-get install python3-dev
    
### STEP 3 Install setuptools and pip (Python's Package Manager)

*Setuptools is a collection of enhancements to the Python distutils that allow developers to more easily build and distribute Python packages, especially ones that have dependencies on other packages. Packages built and distributed using setuptools look to the user like ordinary Python packages based on the distutils.*

*pip is a package manager for Python. It's a tool that allows you to install and manage additional libraries and dependencies that are not distributed as part of the standard library.*

    sudo apt-get install python3-setuptools python3-pip
 
### STEP 4 Install virtualenv

*virtualenv is a tool for creating isolated Python environments containing their own copy of python , pip , and their own place to keep libraries installed from PyPI. It's designed to allow you to work on multiple projects with different dependencies at the same time on the same machine.*

    sudo apt-get install virtualenv
    
CHECK PYTHON VERSION

    python3 -V
    
### For Python 3.10.x

    sudo apt install python3.10-venv
    
### STEP 5 Install MariaDB 10.3 stable package

For ubuntu 20.04

    sudo apt-get install software-properties-common
    sudo apt-key adv --fetch-keys 'https://mariadb.org/mariadb_release_signing_key.asc'
    sudo add-apt-repository 'deb [arch=amd64,arm64,ppc64el] https://ftp.icm.edu.pl/pub/unix/database/mariadb/repo/10.3/ubuntu focal main'
    sudo apt update
    sudo apt install mariadb-server
 
For ubuntu 18.04

    sudo apt-get install software-properties-common dirmngr apt-transport-https
    sudo apt-key adv --fetch-keys 'https://mariadb.org/mariadb_release_signing_key.asc'
    sudo add-apt-repository 'deb [arch=amd64,arm64,ppc64el] https://mirrors.aliyun.com/mariadb/repo/10.3/ubuntu bionic main'
    sudo apt update
    sudo apt install mariadb-server
    
**_IMPORTANT_** :During this installation you'll be prompted to set the MySQL root password. If you are not prompted for the same You can initialize the MySQL server setup by executing the following command

    sudo mysql_secure_installation
    
### STEP 6 MySQL database development files

    sudo apt-get install libmysqlclient-dev
    
### STEP 7 Edit the mariadb configuration ( unicode character encoding )

    sudo nano /etc/mysql/my.cnf

add this to the my.cnf file

    [mysqld]
    character-set-client-handshake = FALSE
    character-set-server = utf8mb4
    collation-server = utf8mb4_unicode_ci

    [mysql]
    default-character-set = utf8mb4
    
Now press (Ctrl-X) to exit

    sudo service mysql restart
    
### STEP 8 install Redis

*Redis is an open source (BSD licensed), in-memory data structure store, used as a database, cache, and message broker.*

    sudo apt-get install redis-server
    
### STEP 9 install Node.js 14.X package

*Node.js is an open source, cross-platform runtime environment for developing server-side and networking applications. Node.js applications are written in JavaScript, and can be run within the Node.js runtime on OS X, Microsoft Windows, and Linux.*

    sudo apt-get install curl
    curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -
    sudo apt-get install -y nodejs

### STEP 10 install Yarn

*Yarn is a JavaScript package manager that aims to be speedy, deterministic, and secure. See how easy it is to drop yarn in where you were using npm before, and get faster, more reliable installs. Yarn is a package manager for JavaScript.*

    sudo npm install -g yarn
    
### STEP 11 install wkhtmltopdf

*Wkhtmltopdf is an open source simple and much effective command-line shell utility that enables user to convert any given HTML (Web Page) to PDF document or an image (jpg, png, etc)*

    sudo apt-get install xvfb libfontconfig wkhtmltopdf

### STEP 12 install frappe-bench

    sudo -H pip3 install frappe-bench
    
    bench --version
    
If version is not showing restart your system

### STEP 13 initilise the frappe bench & install frappe latest version

    bench init [bench-name]
    
### STEP 14 Remove and re-install frappe

*bench initialization comes with frappe app from develop branch. we need to install frappe from version-13 branch*

for frappe git

    bench get-app frappe --branch version-13 

for private repo

    bench get-app frappe [git_repo_url] --branch [branch_name] 
 
### STEP 15 create a site in frappe bench

    bench new-site [site-name]
    
### STEP 16 install ERPNext

for frappe git

    bench get-app erpnext --branch version-13

for private repo

    bench get-app erpnext [git_repo_url] --branch [branch_name] 
    
### STEP 17 install erpnext in your site

    bench --site [site-name] install-app erpnext
    
*if you have multiple sites*

    bench use [site-name]
    
### STEP 18 enable developer mode and start bench

    bench set-config developer_mode 1
    
    bench start
    
    bench migrate
    
    bench --site [site-name] migrate  (optional)
    

 
 
 
 
 
 
 
 
 
 
 
 
 
