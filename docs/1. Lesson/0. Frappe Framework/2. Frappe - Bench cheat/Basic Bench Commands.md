# some basic bench Commands

### 1 reset admin password
```ssh
    bench set-admin-password [password].
```    
### 2 database Backup:
    
    bench --site <sitename> backup 
    
***Backing up with the site's private and public files.***

    bench --site {site} backup --with-files

***Compress the public and private files (if required). This saves the file under a tgz format instead of the default tar format.***

    bench --site {site} backup --with-files --compress

    Change the path where the files backed up will be saved.

    bench --site {site} backup --backup-path {backup_path}


### 3 Database restore:
    
    bench --site [site name] --force restore [path]   # file should be in .sql format
  
### 4 Enabie background jobs: (scheduler)
    
go in side /sites/common_site_config.json

if the value is 1 change it to 0


