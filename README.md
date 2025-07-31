### How to host



1. #### Domain Registrar side



Add these as 4 A records for @(root):

&nbsp;	-185.199.108.153

&nbsp;	185.199.109.153

&nbsp;	185.199.110.153

&nbsp;	185.199.111.153





#### 2\. Code Change





---push everything ----



-----instal package---

npm install gh-pages --save-dev



-----modify package.json------





.....

&nbsp; "scripts": {

&nbsp;   ***"deploy": "gh-pages -d dist",     //add this line***

    ***"dev": "vite",***    

&nbsp;   "build": "tsc -b \&\& vite build",

&nbsp;   "lint": "eslint .",

&nbsp;   "preview": "vite preview"

&nbsp; },.....

....





----make the project deployable-----

npm run build

npm run deploy



#### 3\. GitHub 



settings > pages > 

