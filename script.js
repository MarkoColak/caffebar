// Stavke menija
var menuItems = [

  ];
  
  // Generiranje stavki menija
  var menuLista = document.getElementById("menu-lista");
  menuItems.forEach(function(item) {
    var div = document.createElement("div");
    div.classList.add("menu-item");
    
    var slika = document.createElement("img");
    slika.setAttribute("src", item.slika);
    slika.setAttribute("alt", item.naziv);
    div.appendChild(slika);

    var naziv = document.createElement("h3");
    naziv.textContent = item.naziv;
    div.appendChild(naziv);
  
    var cijena = document.createElement("p");
    cijena.textContent = item.cijena + " KM";
    div.appendChild(cijena);
  
    menuLista.appendChild(div);
  });
  
  // Slanje rezervacije
  var rezervacijaForma = document.getElementById("rezervacija-forma");
  rezervacijaForma.addEventListener("submit", function(event) {
    event.preventDefault(); // Spriječava slanje forme
  
    var ime = document.getElementById("ime").value;
    var datum = document.getElementById("datum").value;
    var brojOsoba = document.getElementById("broj-osoba").value;
  

  
    // Prikaz potvrde rezervacije
    var potvrda = document.createElement("p");
    potvrda.textContent = "Hvala " + ime + ", rezervacija za " + brojOsoba + " osoba na datum " + datum + " je uspješno zaprimljena!";
    rezervacijaForma.appendChild(potvrda);
  
    // Resetiranje forme nakon slanja rezervacije
    rezervacijaForma.reset();
  });
  // Stvaranje elementa opisa slike
var opisSlike = document.getElementById("opis-slike");
var nazivSlike = document.getElementById("naziv-slike");
var opis = document.getElementById("opis");
var zatvori = document.getElementById("zatvori");

// Funkcija za prikazivanje opisa slike
function prikaziOpisSlike(naziv, opisTekst) {
  nazivSlike.textContent = naziv;
  opis.textContent = opisTekst;
  opisSlike.style.display = "block";
}

// Funkcija za skrivanje opisa slike
function skrijOpisSlike() {
  opisSlike.style.display = "none";
}

// Dodavanje događaja klikanja na slike u meniju
var slike = document.querySelectorAll("#menu-lista img");
slike.forEach(function(slika) {
  slika.addEventListener("click", function() {
    var naziv = this.alt;
    var opisTekst = this.dataset.opis;
    prikaziOpisSlike(naziv, opisTekst);
  });
});

// Događaj klikanja na gumb za zatvaranje opisa slike
zatvori.addEventListener("click", skrijOpisSlike);

// Dodavanje događaja klikanja na slike u meniju
var slike = document.querySelectorAll("#menu-lista img");
var modal = document.getElementById("modal");
var modalOpis = document.getElementById("modal-opis");

slike.forEach(function(slika) {
  slika.addEventListener("click", function() {
    var opis = this.dataset.opis;
    if (opis) {
      modalOpis.textContent = opis;
      modal.style.display = "block";
    }
  });
});

// Dodavanje događaja zatvaranja modalnog prozora
var zatvoriModal = document.getElementById("modal-zatvori");
zatvoriModal.addEventListener("click", function() {
  modal.style.display = "none";
});

 
