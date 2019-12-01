# Upplýsingar um hvernig keyra skal þetta verkefni

Til að keyra þetta forrit skal fyrst niðurhala og setja upp node.js. Síðan skal clona verkefnið og keyra "npm install" í 
command line interfacinu eða terminalinu. Þá setur tölvan upp hin ýmsu tól og tæki sem þarf til þess að keyra þetta verkefni. Svo næst skal slá inn npm run dev og að lokum skal smella á index.html og þá mun forsíða vefsíðunar birtast.



## Upplýsingar um verkefnið

Verkefnið innheldur mikið af skjölum. Mörg skjalanna eru vistaðar í möppu til viðhalda einfalt regluverk.

i) Í node_modules möppunni eru öll þau tól og tæki sem verkefnið þarf til þess að vefsíðan virki og eru upplýsingar um öll
   uppsett script ásamt dependencies vistaðar í Í package.json/package-lock.json skráunum. Meðal þeirra uppsettu tóla eru:
   
1) Eslint: skrá sem segir til um hvernig lint fyrir JavaScript skrár skuli háttað
2) Stylelint: linter fyrir Css og Sass sem hjálpar forritaranum ( okkur ) að finna villur eða athugasemdir
3) Test: Til að keyra bæði eslint og stylelint
4) Browser-sync: Tól sem gerir manni kleift að forrita án þess að þurfa refresha vafranum, 
    einnig nauðsynlegt að keyra verkefnið
5) Sass: Bætir við CSS virkni
6) Sass-watch: til að fylgjast með sass skrám og þýða
7) Dev: til að keyra sass og browser-sync


ii) HTML skjöl:
   
   Í verkefninu eru tvö HTML skjöl, annars vegar index.html sem vísar manni beint á forsíðu verkisins og hins vegar        
   fyrirlestur.html sem er HTML skjal fyrir síðurar sem innihalda fyrirlestrana.


iii) Img mappan inniheldur fullt af myndum á formi jpg, png, svg og gif sem eru settar upp á vefsíðuna með javascript.


iv) Undir src möppunni eru javascript (í möppunni lib) og scss (í möppunni styles) skjölin sem unnið var í. Skiptinguna á þessum báðum má sjá á nöfnum skjalanna. Javascript var skipt upp þannig að það var sér skjal fyrir hvort html skjal (list og lecture) og svo sér skjal fyrir hvert 'verkefni' (filterana, headerinn osfrv.). Scss var skipt upp þannig að fyrirlestrarnir fengu sér skjal og hvert 'element' fékk sitt skjal (takkarnir, headerinn osfrv.).


v) Dist mappan inniheldur þýddar sass og JavaScript skrár


vi) Önnur skjöl:
   
   grid.css: Skjal sem býr til grid sem fyrirmynd er unnin eftir
   rollup.config.js: Javascript skrá sem pakkar saman smærri javascript kóðum yfir í eina heilsteypta skrá.



## Upplýsingar um alla sem unnu verkefnið

Guðrún Herdís Arnarsdóttir gha18@hi.is

Viktor Franksson vif6@hi.is
