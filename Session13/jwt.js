/*
json web token sebuah string panjang yang sangat random yang gunanya sendiri untuk melakukan sistem autentikasi dan pertukaran informasi. Umumnya untuk melakukan login tidak seperti pada aplikasi website biasa dimana kita menggunakan session untuk mengingat siapa yang sedang login.

satu hal yang sangat perlu diperhatikan ketika membuat REST API adalah security-nya. Jangan sampai user yang tidak memiliki otentikasi dan otorisasi dapat menggunakan REST API yang kit asediakan. maka dari itu kita memerlukan JWT, yaitu Json Web Token. Json Web Token adalah cara untuk mengautentikasi REST API, Sehingga hanya orang yang memiliki token saja yang boleh menggunakannya. 
*/