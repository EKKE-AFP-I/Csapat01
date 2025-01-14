## Követelmény  specifikáció

# 1. Áttekintés
A projekt célja egy webalapú, interaktív kvízjáték fejlesztése, amely Európa földrajzi, kulturális és történelmi ismereteit játékos formában közvetíti. A felhasználók kérdések megválaszolásával "foglalhatják el" a térkép részeit. A kérdések több kategóriába sorolhatók (pl. földrajz, történelem). A fejlesztéshez modern frontend és backend technológiákat alkalmazunk, a felhasználói élményt interaktív térképes megjelenítés és eredménykövetés gazdagítja.

# 2. Jelenlegi helyzet
A jelenlegi oktatási és szórakoztató platformok többsége nem kínál interaktív, játékos tanulási lehetőséget Európa földrajzának és kultúrájának megismerésére. Bár vannak hagyományos kvízoldalak, ezek általában statikusak, nem ösztönöznek hosszabb távú részvételre, és nem nyújtanak vizuálisan motiváló élményt.

A tanulók és játékosok számára hiányzik egy olyan alkalmazás, amely:
* Játékos tanulást biztosít: Az ismeretek megszerzése szórakoztató és interaktív módon történhet.
* Interaktív térképes megoldást kínál: Az európai országok földrajzának, kultúrájának és történelmének megértése térképes vizualizációval könnyíthető meg.
* Különböző szintű tudást céloz meg: Kezdőktől haladókig mindenki számára releváns kihívásokat nyújt.
* Motivációt teremt: A játékosok eredményeinek követése, valamint a térkép "elfoglalása" ösztönöz a folytatásra.

# 3. Vágyálom rendszer
A projekt célja egy olyan rendszer létrehozása, amely játékos tanulást és gyakorlást tesz lehetővé egy interaktív európai térkép segítségével. A rendszer több platformon elérhető, beleértve a webes és az androidos felületeket is. A regisztrált felhasználók különböző nehézségi szintek közül választhatnak, és a kérdések megválaszolásával fokozatosan "elfoglalhatják" Európa térképét. Az alkalmazás lehetőséget nyújt arra is, hogy regisztráció nélkül elindítsuk a játékot, későbbiekben a pontszámok és eredmények megosztásához regisztráció szükséges.
Terv a közeljövőben: az eredmények tárolásával a felhasználók összehasonlíthatják teljesítményüket másokkal egy toplista segítségével. Egy pontrendszer biztosítja a helyes válaszokért járó pontok kiosztását, amelyet a feladatok időalapú teljesítése is befolyásolhat.
A rendszer tartalmaz egy adminisztrátori felületet, amely lehetővé teszi, hogy az admin fiókkal rendelkező felhasználók új kérdéseket töltsenek fel vagy módosítsanak. A frontendet Angular, a backendet PHP technológiával valósítottuk meg, így biztosítva a gyors és megbízható működést. A felhasználói szintek közötti különbségek is jól kezelhetők: az alapfelhasználók kizárólag játszhatnak, míg az adminok tartalmat is kezelhetnek.

# 4. Rendszerre vonatkozó törvények, szabályok, ajánlások
* AZ EURÓPAI PARLAMENT ÉS A TANÁCS (EU) 2016/679 RENDELETE (GDPR): A természetes személyek adatainak kezelése tekintetében történő védelem és az ilyen adatok szabad áramlása érdekében.

* 2011. évi CXII. törvény az információs önrendelkezési jogról és az információszabadságról (Info tv.): Ez a törvény a GDPR magyarországi kiegészítő szabályozása, és az adatkezelési tevékenységek átláthatóságát, jogszerűségét biztosítja.

* 2001/29/EK irányelv: Az információs társadalomban a szerzői és szomszédos jogok egyes vonatkozásainak összehangolása.

* 2018. évi XXXVIII. törvény – Az Infotv. módosítása: Ez a törvény az Európai Unió adatvédelmi reformjával összefüggésben módosította az Infotv.-t, hogy összhangba hozza a magyar jogot a GDPR rendelkezéseivel.

* ISO/IEC 27001: Az információbiztonsági irányítási rendszer követelményei.

# 5. Jelenlegi üzleti folyamatok modellje
1. Bevezetés:
- Rövid áttekintés a játék céljáról és jelenlegi állapotáról.

1. Játékosok regisztrációja és bejelentkezése:
- A játékosok hogyan regisztrálnak és lépnek be a rendszerbe.
- Felhasználói hitelesítési folyamatok leírása.

1. Játék folyamat:
- A játék menete: kérdések megjelenítése, válaszidő, pontozási rendszer.
- Szabályok és mechanizmusok ismertetése (például hogyan működnek a bónusz kérdések vagy a tippek).

1. Adatkezelés:
- A játékosok által megadott adatok tárolása és kezelése.
- Adatvédelemi irányelvek és biztonsági intézkedések bemutatása.

1. Eredmények és statisztikák:
- A játék végén hogyan történik az eredmények kiszámítása és megjelenítése.
- Hogyan érhetik el a játékosok a statisztikáikat és eredményeiket.

1. Értesítések és kommunikáció:
- Hogyan kapnak értesítéseket a játékosok (például e-mailben vagy alkalmazáson belüli üzenetben).
- Ügyfélszolgálati folyamatok leírása.

# 6. Igényelt üzleti folyamatok
A játékban regisztráció szükséges a részvételhez. Adminisztrátorként lehetőség van admin kóddal regisztrálni, míg anélkül csak átlagos felhasználóként.
A bejelentkezés felhasználónév és jelszó párossal történik, amely természetesen hitelesítve van.
Az adminisztrátorok új kvíz kérdéseket és válaszlehetőségeket rögzíthetnek, valamint meglévőket módosíthatnak vagy törölhetnek.
Minden bejelentkezett felhasználó játszhat a játékkal, ahol egy kérdést és négy válaszlehetőséget kapnak. A helyes válaszért 1 pont jár, a helytelenért pedig 0 pont.
Tároljuk a játékokonkénti eredményeket, valamint a felhasználók összesített eredményeit, azonban jelenleg még nincs lehetőség ezek kilistázására.

# 7. Követelmény lista
ID|Verzió|Név|Kifejtés
--|------|---|--------
K01|V1.0|Bejelentkezési felület|A játékosok email címük és jelszavuk segítségével bejelentkezhetnek. Helytelen adatok esetén hibaüzenet jelenik meg.
K02|V1.0|Regisztráció|Új játékos regisztrációja felhasználónév, email cím és jelszó megadásával. Hiányos vagy nem megfelelő adatok esetén értesítés jelenik meg.
K03|V1.0|Jogosultsági szintek|- Admin: Felhasználók kezelése, játék statisztikák, és rendszermódosítások. - Játékos: Játék indítása, pontszámok megtekintése, toplista elérése.
K04|V1.0|Admin felület|Az adminisztrátor számára elérhető felület.
K05|V1.0|Kvíz|A játék többkérdéses kvízekből áll, ahol a felhasználó a helyes válaszok függvényében kap pontot.
K06|V1.0|Kvíz indítás|Bal felső sarokba az ikonba kattintva előhozható és indítható a játék.
K07|V1.0|Kvíz kérdés létrehozás|Admin felhasználóként az admin felületen új kérdés hozható létre.
K08|V1.0|Kvíz kérdés módosítása|Admin felhasználóként az admin felületen módosíthatóak a kérdések és válaszok.

# 8. Riportok


# 9. Fogalomtár
* Adminisztrátor: Az oldal kezeéséért felelős regisztrált és bejelentkezett felhasználó. Joga van a kvíz kérdéseket módosítani, meglévőeket törölni vagy újakat tárolni.
* Játékos: Admin jogokkal rendelkező regisztrált és bejelentkezett játékos.
* Látogató: Nem bejelentkezett személy, aki felkereste a kezdőoldalt.
* Admin felület: ahol lehet basztatni a kérdéseket
* Játék felület: ahol sorban jönnek a kérdések és a hozzájuk tartozó 4 válaszlehetőség
