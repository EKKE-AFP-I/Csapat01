## Rendszerterv

# 1. A rendszer célja
A projekt célja egy olyan webes alkalmazás kifejlesztése, amely lehetőséget nyújt a felhasználók számára, hogy játékos formában tanuljanak különböző témakörökben. Az alkalmazás fő mechanikája szerint Európa térképét lehet „elfoglalni” úgy, hogy a felhasználók kérdésekre helyesen válaszolnak. A rendszer több nehézségi szintet és felhasználói szinteket támogat, ezáltal alkalmazkodik a különböző tudásszintekhez és preferenciákhoz.

Célunk az, hogy a rendszer platformfüggetlen legyen, ezáltal hozzáférhető számítógépeken, tableteken és okostelefonokon keresztül is. Az alkalmazás ingyenesen elérhető, és regisztráció után a felhasználó teljes körű hozzáférést kap a funkciókhoz. Minden téma végén feladatokkal tesztelhetik tudásukat, az eredményeket pedig a rendszer menti a profiljukba.

# 2. Projektterv
Szerepkörök:\
Front-end munkálatok: Kovács Levente, Hajdu Attila, Fülep Viktor\
Back-end munkálatok: Fülep Viktor, Hajdu Attila, Kovács Levente\
Dokumentáció készítése: Hajdu Attila, Fülep Viktor, Kovács Levente\

Ütemterv:
Funkció|Feladat|Prioritás|Állapot
-------|-------|---------|-------
Követelmény specifikáció|Dokumentálás|5|100
Funkcionalitás specifikáció|Dokumentálás|5|100
Rendszerterv|Dokumentálás|5|100
Adattárolás|Adatmodell megtervezése|1|100
Adattárolás|Adatbázis megvalósítása szerveren|1|100
Back-end|Adatbázisokból adatok lekérdezés|1|100
Back-end|Adatbázisokba adatok beszúrása|1|100
Back-end|Adatbázisokban adatok módosítása|2|100
Back-end|Adatbázisokból adatok törlése|3|100
Front-end|Regisztrációs felület elkészítése|1|100
Front-end|Login felület elkészítése|1|100
Front-end|Admin felület elkészítése|1|100
Front-end|Adatok szerkesztése felület elkészítése|1|100
Front-end|Kvíz felület elkészítése|1|100
Front-end|Eredmény felület elkészítése|1|100

# 3. Üzleti folyamatok modellje

![uzleti_folyamatok_modellje](https://github.com/EKKE-AFP-I/Csapat01/blob/attila/docs/imgs/uzleti_folyamatok_modellje.png)

# 4. Követelmények
Név|Kifejtés
---|--------
Bejelentkezési felület|A játékosok email címük és jelszavuk segítségével bejelentkezhetnek. Helytelen adatok esetén hibaüzenet jelenik meg.
Regisztráció|Új játékos regisztrációja felhasználónév, email cím és jelszó megadásával. Hiányos vagy nem megfelelő adatok esetén értesítés jelenik meg.
Jogosultsági szintek|- Admin: Felhasználók kezelése, játék statisztikák, és rendszermódosítások. - Játékos: Játék indítása, pontszámok megtekintése, toplista elérése.
Admin felület|Az adminisztrátor számára elérhető felület.
Kvíz|A játék többkérdéses kvízekből áll, ahol a felhasználó a helyes válaszok függvényében kap pontot.
Kvíz indítás|Bal felső sarokba az ikonba kattintva előhozható és indítható a játék.
Kvíz kérdés létrehozás|Admin felhasználóként az admin felületen új kérdés hozható létre.
Kvíz kérdés módosítása|Admin felhasználóként az admin felületen módosíthatóak a kérdések és válaszok.

# 5. Funkcionális terv
>Felhasználók:
>> Vendég felhasználók:
>>* Regisztráció nélkül próbálják ki a játékot, de eredményeiket nem menti a rendszer.
>>* Regisztrált felhasználók:
>>* Személyre szabott profil, eredmények mentése, fejlődés nyomon követése.
>
>> Adminisztrátorok:
>> * Felügyelik a rendszer működését, kezelik a kérdéseket és témákat.

>Használati esetek:
>>1. Bejelentkezés:
>>* A felhasználók regisztrálhatnak vagy bejelentkezhetnek email-címük és jelszavuk segítségével.
>>* Az adminisztrátorok kezelhetik a kérdéseket (létrehozás, módosítás, törlés).
>
>>2. Játékmenet:
>>* A felhasználó egy véletlenszerű kérdéseket kap, majd kérdésekre válaszol.
>>* Helyes válasz esetén elfoglal egy országot a térképen és pontot kap.
>>* Nehézségi szintek biztosítva vannak a tanulás támogatására.
>
>>3. Eredmények kezelése:
>>* A regisztrált felhasználók egy nyilvános táblázaton nyomon követhetik a teljesítésüket. -feljesztés alatt-
>>* Az adminisztrátorok statisztikákat nézhetnek az aktív felhasználókról és új kérdéseket hozhatnak létre.

# 6. Fizikai környezet
A játék elsősorban web platformra készült, asztali gépre tabletre és mobilra egyszerre. Reszponzív, mobile first szemléletmóddal fejlesztve. Single page web app.  Az app standalone komponensekből épül fel, nincsenek megvásárolt komponenseink, nyílt forráskódú project.
Fejlesztői eszközök:
- XAMPP Control Panel
- phpmyadmin
- Visual Studio Code
Felhasznált csomagok:
- bootstrap5
- angular material
- fontawesome6
Felhasznált technológiák
- angular 18
- typescript
- html5
- scss (sass)

# 7. Architektúrális terv
Back-end:\
A rendszerhez szükség van egy adatbázis szerverre, ebben az esetben MySql-t használunk. A kliens oldali programokat egy php alapú REST api szolgálja ki, ez csatlakozik az adatbázis szerverhez. A kliensekkel JSON objektumokkal kommunikál.\
\
Front-end:\
A web alkalmazás Angular JS keretrendszer használatával készül el. Az alkalmazás moduláris felépítésű, ahol külön modulok kezelik a felhasználói bejelentkezést, a kvíz kérdések kezelését, és az eredmények megjelenítését. Az adatokat egy központi State Management (pl. NgRx) kezeli, amely biztosítja a komponensek közötti szinkronizációt. A kérdéseket és válaszokat egy base service rendszer szolgáltatja a komponensek felé. Az Angular Material és a Bootstrap5 biztosítja a reszponzív és letisztult felhasználói felületet.

# 8. Adatbázis terv
![adatbazis](https://github.com/EKKE-AFP-I/Csapat01/blob/attila/docs/imgs/adatb.png)


# 9. Implementációs terv
Back-end:\
Az adatbázishoz való kapcsolódás, a táblákból történő lekérdezések, a táblákba történő tárolások és a táblákban történő módosításokat és történő törléseket megvalósító metódusokat php nyelven fogjuk írni. Ezeket a műveleteket amennyire csak lehet külön fájlokba írva készítjük és így fogjuk egymáshoz csatolni a jobb átláthatóság, könnyebb változtathatóság és könnyebb bővítés érdekében.\
\
Front-end:\
A webes felület főként HTML, SCSS (SASS) és Angular (TypeScript) technológiákkal fog készülni. Reszponzív, mobile first szemléletmóddal lesz fejlesztve. Single page web app fog készülni. Az app standalone komponensekből épül majd fel, nem lesznek megvásárolt komponenseink, nyílt forráskódú project lesz.

# 10. Teszt terv
Funkcionális teszt fog készülni mindhárom fejlesztő részéről A teszt célja a rendszer és a komponensei funkcionalitásának teljes vizsgálata, ellenőrzése, a rendszer által megvalósított üzleti szolgáltatások verifikálása.

Tesztelendő funkciók\
Back-end service:\
Képesnek kell lennie csatlakozni a webes klienshez. Képesnek kell lennie egy időben kiszolgálni több klienst is. Fel kell tudnia tölteni, és le kell tudnia kérdezni az adatbázis adatait. Képesnek kell lennie már meglévő adat módosítására. Képesnek kell lennie már meglévő adat törlésére. Képesnek kell lennie minden felületen elérhető funkciók biztosítására.

Login felület:\
Képesnek kell lennie adatbázisban lévő egyezőség alapján beengedni - átírányítani - felhasználókat a kezdőoldalra.

Regisztrációs felület:\
Ezen felületen a megfelelő adatok megadása mellett a megerősítés gombra kattintva a felhasználó regisztrációjának a funkcionális specifikációban leírtak szerint végbe kell mennie, majd elérhetővé kell tenni a bejelentkezést a felhasználó számára. Hibás regisztrációs adatok megadásakor hibaüzenetet kell kapjon a felhasználó.

Admin felület:\
Admin jogosultsággal bejelentkezett felhasználónak el kell tudnia érnie ezt a felületet, látnia kell az adatbázisban tárolt adatokat kártyákon.

Adatok szerkesztése felület:\
Admin jogosultsággal bejelentkezett felhasználónak el kell tudnia érnie ezt a felületet, ahol képesnek kell lennie az adatokat módosítani, törölni vagy újakat létrehozni. Ezeket a módosításokat le kell követni adatbázis szinten is.

Játék felület:\
Nem regisztrált felhasználónak is el kell tudnia érnie login és regisztrációs felületen illetve regisztrált és bejelentkezett felhasználónak is el kell tudnia érnie ezt a felületet. Képesnek kell lennie a játékot végig játszania, egymás után kiválasztani a szerinte helyes válaszokat annyi kérdésen keresztül, amennyi előre be lett állítva.
