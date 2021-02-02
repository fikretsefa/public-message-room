# Socket.io Genel Sohbet Odası

Socket.io ve React kazanımlarını geliştirmek için oluşturulmuştur.

![](https://media.giphy.com/media/aWBB3o46zBi3yMIFvq/giphy.gif)

## `socket.io`
Server ile client arasında bilgi alış verişini sağlayan bir soket kütüphanesidir. 
HTTP isteklerinden farklı olarak sunucudan istemciye bir olay sonucu veri gönderebilir.
Ayrıntılı socket.io 3.0 için https://socket.io/ inceleyiniz.

## `restcountries`
Ülkelerle ilgili birçok veriye ulaşabileceğiniz api sağlayacısıdır.
Projede ülke ad, alpha2Code ve bayrakları için kullanılmıştır.
Ayrıntılı restcountries için https://restcountries.eu inceleyiniz.

## `tailwind css`
tailwind özelleştirilebilir özelleştirilebilir bir CSS yardımcı araç kütüphanesidir.
css stillerini içeren kısayollar barındırır.
index.html dosyasına <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet"> eklemeyi unutmayınız.
Ayrıntılı tailwind için https://tailwindcss.com/docs/installation#using-tailwind-via-cdn inceleyiniz.

## Çalıştır
**git clone [project]** - Projeyi indir 

**cd [project-name]** - Proje dizinine gir

**npm i** - Gerekli kütüphaneleri ekle

**npm run build** Projeyi build et

**node server.js** Socket.io server açılıştır

**yarn start** Projeyi çalıştır

Server <a href="localhost:4000" rel="nofollow">localhost:4000</a> proje default <a href="localhost:3000" rel="nofollow">localhost:3000</a> adresinde çalışır.
Cors hatasını önlemek için server.js line:3 col:1 var olan proje adresini değiştiriniz.

<pre>const io = require('socket.io')(http, { cors: { origin: "http://localhost:3000", credentials: true } });</pre>
