import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.css"]
})
export class MenuComponent implements OnInit {
  linksmenu = new Array<link>();
  constructor() {
    this.linksmenu.push(
      new link("Strona Główna", "index.php", "", "", "", ""),
      new link("Aktualności", "news.php", "", "", "", ""),
      new link("Archiwum", "archives.php", "", "", "", ""),
      new link(
        "Egzaminy",
        "",
        "Egzamin Maturalny",
        "matura.php",
        "Egzamin Zawodowy",
        "egzamin_nowy"
      ),
      new link("Dokumenty", "", "Statut", "", "Podręczniki", ""),
      new link(
        "Dla Absolwentów",
        "absolwent_oferty.php",
        "Oferty Pracy",
        "",
        "Egzamin Maturalny",
        ""
      ),
      new link("Kontakt", "kontakt.php", "", "", "", "")
    );
  }

  ngOnInit() {}
}

class link {
  constructor(
    public name: string,
    public link: string,
    public name2: string,
    public link2: string,
    public name3: string,
    public link3: string
  ) {}
}
