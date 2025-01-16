## Rendszerterv

# 1. A rendszer célja
A projekt célja egy olyan webes alkalmazás kifejlesztése, amely lehetőséget nyújt a felhasználók számára, hogy játékos formában tanuljanak különböző témakörökben. Az alkalmazás fő mechanikája szerint Európa térképét lehet „elfoglalni” úgy, hogy a felhasználók kérdésekre helyesen válaszolnak. A rendszer több nehézségi szintet és felhasználói szinteket támogat, ezáltal alkalmazkodik a különböző tudásszintekhez és preferenciákhoz.

Célunk az, hogy a rendszer platformfüggetlen legyen, ezáltal hozzáférhető számítógépeken, tableteken és okostelefonokon keresztül is. Az alkalmazás ingyenesen elérhető, és regisztráció után a felhasználó teljes körű hozzáférést kap a funkciókhoz. Minden téma végén feladatokkal tesztelhetik tudásukat, az eredményeket pedig a rendszer menti a profiljukba.

# 2. Projektterv
Szerepkörök:
Front-end munkálatok: Kovács Levente, Hajdu Attila, Fülep Viktor
Back-end munkálatok: Fülep Viktor, Hajdu Attila, Kovács Levente
Dokumentáció készítése: Hajdu Attila, Fülep Viktor, Kovács Levente

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
