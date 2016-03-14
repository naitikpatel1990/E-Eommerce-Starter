Documentation for Ionic E-Commerce starter
=====================================================

Prerequisites
-----------------------------------------------------
- Node.js
- Npm
- Bower
- Gulp
- Ionic
- Android SDK
- iOS simulator (Works only in Mac)


Steps to run this starter
-----------------------------------------------------
- Once you download the zip file, unzip the file
- checkout to the directory.
- Run **npm install**
- Run **bower install**
- Run **ionic serve**, which will open this application in the browser.
- Before running in a device or emulator follow the below instructions.


Add platforms
-----------------------------------------------------
- ionic platform add android
- ionic platform add ios(Works only in Mac)

Build for platforms
-----------------------------------------------------
- ionic state reset
- ionic build android
- ionic build ios (Works only in Mac)

Run in emulator
-----------------------------------------------------
- ionic run ios --emulator
- ionic run android --emulator


Run in device
-----------------------------------------------------
- ionic run ios --device
- ionic run android --device


Run in device with live reload
-----------------------------------------------------
- ionic run ios --device -lc
- ionic run android --device -lc


Note
-----------------------------------------------------
This is comepletely a static application, where we are not dealing with the api integrations and any other dynamic functionalities.
If there are any issues in the existing application, i can support to resolve them. If you wish to have any additional features, they will be implemented in the next versions with some changes in the price also.
