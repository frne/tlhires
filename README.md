# Ganze Reports downloaden (HiRes)

### 1.) Report im Browser (Chrome) öffnen

Die URL sollte so ähnlich ausshen wie diese: 

[http://ch.tilllate.com/en/photoalbum/overview/406973](http://ch.tilllate.com/en/photoalbum/overview/406973)

![Screenshot 1](img/1.png)

### 2.) Konsole öffnen

Mit einem Rechtsklick irgendwo auf die Seite das Kontextmenü öffnen, und auf **Inspect** oder **Prüfen** klicken.

![Screenshot 2](img/2.png)

Es öffnet sich ein Fenster am unteren Rand. Klickt da auf den Tab **Console** oder **konsole**.

![Screenshot 3](img/3.png)

### 3.) Script ausführen

Kopiert folgendes Script:

```javascript
jQuery("body").html("");

jQuery(album.photos.pictures).each(function (k, v) {
    console.info(v.url + v.filename + "." + v.filetype);
    jQuery("body").append(
        "<a href=\"http://ch.tilllate.com/de/photoalbum/download/hires/" + v.fid + "\" download=\"" + v.fid + v.gid + "." + v.filetype + "\">" +
        "<img src=\"" + v.url + v.filename + "." + v.filetype + "\" style=\"width: 200px; height: auto;\"/>" +
        "</a>&nbsp;&nbsp;");
    if ((k % 4) == 0) {
        jQuery("body").append("<br /><br />");
    }
});
```

Und fügt es bei dem kleinen blauen Pfeil im Konsolenfenster ein.

![Screenshot 4](img/4.png)

### 4.) Bilder downloaden

Sobald ihr Enter drückt, werden auf der Seite alle Bilder des Reports geladen. 

![Screenshot 4](img/5.png)

Jetzt könnt ihr einfach die Bilder anklicken, die ihr downloaden wollt, und sie werden als Hires heruntergeladen.

# Getaggte / Abgelegte Fotos herunterladen

Geliches Vorgehen. Jedoch, öffnet ihr eure Memberpage, statt einen Report und führt bei Punkt 3 dieses Script aus: [https://github.com/frne/tlhires/blob/master/download_tagged.js](https://github.com/frne/tlhires/blob/master/download_tagged.js)
