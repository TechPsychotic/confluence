# Confluence
The very own local cloud storage

## Why I tried to make my own Local Cloud Storage?

- People nowadays are using more and more cloud storage for
    - backing up data
    - storage of files to save physical storage
    and many numerous reasons
- I, myself use many cloud storage applications like **OneDrive**, **Google Drive** and **iCloud** to backup or store all my data... the main reason behind is I do not want to rely on my physical drives and that I like portability (accessing my data through all/any devices)
- The biggest issue was that i had to *sign in to the accounts* and I agree thet it is a neccessary security measure but I don't *need* it when I'm home or on a trusted network and really want to eliminate all these protocols where I feel safe.
- Another issue was all of these so called ***"Services"*** offer only limited services and you have to ***PAY*** for extra storage, which frankly I hate.
- I know I could've used third party solutions or some of the repositories on **GITHUB** itself but I was curious how difficult will it be to make my own, also, I hate third party solutions...
- Not to mention most of the times my ADHD kicks in when I face any problems and I try to solve it myself (most of the attempts remain half completed, but whatever).
So all of these reasons led to ***making my own local cloud storage***
Was it easy? No, Was it Worth it? YES!!!

## Features

- The main feature is that it is ***LOCAL***, so no need to worry about security and privacy. Also it can be ***ACCESSED*** from anywhere, just make sure you are on the same network.
- It is ***FREE and expandable*** (expand according to your needs), no need to pay for extra storage.
- It is ***OPEN SOURCE***, so you can modify it to your needs.
- It is ***EASY*** to use, just run the script and you are good to go.
- It is ***FAST***, it uses ***HTTP*** protocol to transfer files.
- It is ***PORTABLE***, you can use it on any device with a browser.
- It does not require you to connect to Internet, so you can use it ***OFFLINE*** (you'll have to configure your server as well as router for *that*).

## How to use it?

### 1. Installing Requirements
- Install Node.Js on your server (simply a pc/laptop which you want to make the main storage) from [here](https://nodejs.org/en/download/)
- Install Git on your server from [here](https://git-scm.com/downloads) only if you want to clone the repository, otherwise you can download the zip file from  repository.
- Install express module for Node.Js by running the following command in your terminal
```npm install express```
- Install body-parser module for Node.Js by running the following command in your terminal
```npm install body-parser```
- Install multer module for Node.Js by running the following command in your terminal
```npm install multer```
- Install fs module for Node.Js by running the following command in your terminal
```npm install fs```
- Intall nodemon module for Node.Js by running the following command in your terminal
```npm install nodemon```
now let's move on to the next step
### 2. Configuring the server
- First try dry testing the server by running the following command in your terminal
```node server.js```
- If you get no errors, then you are good to go, otherwise check the error and try to fix it.
- Now, open your browser and type ```[your ip address]:3000``` in the address bar and hit enter.
    - You can find your ip address by running the following command in your terminal
    ```ipconfig``` or ```ifconfig``` (for linux users)

- Now you're good to go, you can now access your cloud storage from any device on the same network.
### 3. How to access it from other devices?
- Open your browser and type ```[your ip address]:3000``` in the address bar and hit enter.
- You can downlod the files by clicking on the file name.
- You can upload the files by clicking on the upload button and selecting the file you want to upload.
## Conclusion
- I know it is not the best solution out there, but it is ***MY*** solution and I'm proud of it.
- I'm still working on it and will try to improve it as much as I can.
- If you have any suggestions or improvements, feel free to contact me.
- If you want to contribute to this project, feel free to do so.

## Scope of Improvement
- No service is perfect, so is this one, there are many improvements that can be made to this project, some of them are:
    - Adding a login page for security (though it's agsinst the main idea of this project)
    - Adding a database to store user data
    - Adding features like: *drag and drop upload, deletion and viewing etc.*
    - Adding a feature to download all the files in a zip file
    - Adding a feature to upload multiple files at once
    - Adding a feature to upload folders
    - Adding a feature to upload files from other cloud storage services like: *OneDrive, Google Drive, iCloud etc.*
    - Making it more efficient and secure

## Donations
- If you like my work and want to support me, you can donate me on [PayPal](https://paypal.me/TechPsychotic?country.x=IN&locale.x=en_GB)

## License
[MIT](https://choosealicense.com/licenses/mit/)
