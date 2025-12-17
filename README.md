# Ad Connect - Platform Ad
In sprint 2 hebben we de opdracht gekregen om een website te ontwikkelen voor een opdrachtgever, samen met 2 teams van 1e jaars FDND-studenten en 1 team 2e jaars FDND-studenten. Tijdens deze vijfde sprint heb ik mij gericht op het ontwerpen, maken en implementeren van een JS interactie, een filter, op de nieuws pagina.

Voor het maken van een JS interactie op de nieuws pagina, heb ik eerst op meerdere nieuws websites onderzoek gedaan en gekeken naar wat voor lay-out die gebruiken. Velen gebruiken filters, dus daar heb ik mij verder in verdiept. 

Graag zou ik feedback willen op de vorm/ styling van de artikelen en de benamingen van de filters.

#### Wie is Ad Connect?
Het landelijk Overlegplatform Associate degrees (hierna: Platform Ad) is opgericht in 2018. 
De website van het Platform Ad (onder de url: www.deassociatedegree.nl) is een 
toegangspoort voor informatie over Ad-onderwijs. De website is opgericht om de 
leerwaarde en documentatie van Ad-opleidingen te versterken. Het Platform Ad doet dit in 
samenwerking met de ‘Vereniging Hogescholen’. De website is het online platform van het 
‘Overlegplatform Associate Degrees’ en ondersteunt o.a. de hogescholen die Ad-opleidingen 
aanbieden en de Landelijke Ad-overleggen (LadO’s).  

#### Vraag van de opdrachtgever
In de loop der jaren nam de hoeveelheid tekst en documenten toe, waardoor de 
overzichtelijkheid en vindbaarheid van de informatie afnamen.


<ins>Opdracht:</ins> Helpen bij het realiseren van een overzichtelijke en gebruiksvriendelijke website die inspeelt 
op de behoefte van verschillende doelgroepen waar het Platform Ad zich op richt. Ook moet de website eenvoudig te onderhouden zijn door de editor(s) en webmaster.

## Inhoudsopgave

  * [Beschrijving](#beschrijving)
  * [Kenmerken](#kenmerken)
  * [Bronnen](#bronnen)
  * [Licentie](#licentie)

## Beschrijving
### Het ontwerp
Voor het ontwerp van de nieuws pagina, heb ik eerst gekeken naar andere nieuws websites en de lay-out daarvan. Veel nieuws websites gebruiken filters om beter te kunnen navigeren naar artikelen die voor de gebruiker interessant zijn. Daarna heb ik gekeken naar hoe de huidige nieuws pagina van de opdrachtgever er uit ziet en een paar artikelen gegroepeerd om zo een filter te kunnen maken.


De website is responsive en is Mobile first ontworpen en gemaakt.

<img width="1000" alt="all-devices-black(4)" src="https://github.com/user-attachments/assets/f77f4a0b-8ec6-4135-afd5-3bc43ed79da5" />

*Mockup van nieuws-pagina*

<video src="https://github.com/user-attachments/assets/ba06c7dd-a87e-4392-9719-b9ef2ce4e325"></video>



Link naar de website: https://sieuwkesheta.github.io/fix-the-flow-interactive-website/nieuws.html

### Wireflow
Ik ben begonnen aan een wireflow te maken van de interactie, om duidelijk te kunnen zien hoe ik het filter werkend zou willen hebben.

[Figma ontwerp wireflow](https://www.figma.com/design/6u38mXyN7LNhYCBArOF9TJ/Wireflow-filter-nieuwspagina--Ad-Connect?node-id=18-734&t=jflbv61rZLXMAKD3-1)

<img width="300"  alt="Image" src="https://github.com/user-attachments/assets/0ffbb305-cb85-431b-bc3f-72fd1e1b3e3f" />

### Breakdown schets
Daarna heb ik een breakdown schets gemaakt, om te kijken welke code ik ongeveer zou willen/kunnen gebruiken. 

[Figma ontwerp breakdown schets](https://www.figma.com/design/6u38mXyN7LNhYCBArOF9TJ/Wireflow-filter-nieuwspagina--Ad-Connect?node-id=18-775&t=jflbv61rZLXMAKD3-1)

<img width="300" alt="image" src="https://github.com/user-attachments/assets/68d52a57-5eb2-4e3f-8833-e43c18dc5ca1" />

### Nieuws pagina voor verschillende apparaten
[Figma ontwerpen](https://www.figma.com/design/6u38mXyN7LNhYCBArOF9TJ/Wireflow-filter-nieuwspagina--Ad-Connect?node-id=0-1&t=jflbv61rZLXMAKD3-1)  

Desktop versies

<img width="500"  alt="Image" src="https://github.com/user-attachments/assets/959cda49-c72d-4a8b-9cbd-17667370bdb7" />

Mobile versies

<img width="300" alt="Image" src="https://github.com/user-attachments/assets/b6d6f774-78a4-41bd-8e70-964e61cf436b" />

## Kenmerken
Ik heb gebruikt gemaakt van HTML, CSS en JS.

### HTML Structuur
De HTML structuur van de pagina is semantisch opgebouwd, in het engels. De pagina bevat een header met daarin een navigatie `<nav>`, een main voor de inhoud met daarin nog een navigatie `<nav>` met buttons `<button>` voor het filter, articles `<article>`, en een footer.

Filter:
https://github.com/SieuwkeSheta/fix-the-flow-interactive-website/blob/e371778050c78ec33baab03dfc425f808c52774e/nieuws.html#L107-L112

Artikelen:
https://github.com/SieuwkeSheta/fix-the-flow-interactive-website/blob/e371778050c78ec33baab03dfc425f808c52774e/nieuws.html#L115-L129

### Belangrijke aspecten CSS
De website is *mobile first* gemaakt. De media queries zijn genest in de elementen, waardoor de code overzichtelijker is en de responsiviteit per element makkelijk aan te passen is. Daarnaast heb ik gebruik gemaakt van `line-clamp` om de text in de artikelen maximaal 3 regels te geven en de rest van de text te laten wegvallen met '...'. 

Responsiviteit: 
https://github.com/SieuwkeSheta/fix-the-flow-interactive-website/blob/e371778050c78ec33baab03dfc425f808c52774e/styles/styles.css#L885-L900

Line-clamp:
https://github.com/SieuwkeSheta/fix-the-flow-interactive-website/blob/e371778050c78ec33baab03dfc425f808c52774e/styles/styles.css#L948-L954

### Belangrijke aspecten JS
Voor het maken van het filter heb ik een [video](https://www.youtube.com/watch?v=jZiZs8cZAKU&t=146s) gekeken van Kevin Powel en comments geschreven bij de code.

https://github.com/SieuwkeSheta/fix-the-flow-interactive-website/blob/e371778050c78ec33baab03dfc425f808c52774e/scripts/script.js#L13-L64

## Bronnen
- [Video over filters maken in JS @Kevin Powel](https://www.youtube.com/watch?v=jZiZs8cZAKU&t=146s)
- [Line-clamp @MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/line-clamp)
- [Line-clamp @CSS-TRicks](https://css-tricks.com/almanac/properties/l/line-clamp/)
- [3 Stappenplan van JS @FDND Workshop - Programming User Interacion](https://github.com/fdnd-task/fix-the-flow-interactive-website/blob/main/docs/programming-user-interaction.md#het-3-stappenplan-waarmee-je-bijna-alles-kan)

## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).

