import { makeAutoObservable } from "mobx";

export default class DeviceStore {
  constructor() {
    this._types = [
      { id: 1, name: "Столы" },
      { id: 2, name: "Стулья" },
    ];
    this._brands = [
      { id: 1, name: "ИП Буратино" },
      { id: 2, name: "Гомельдрев" },
    ];

    this._devices = [
      {
        id: 1,
        name: "Стол-1",
        price: 25000,
        rating: 5,
        img:
          "https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F3%2F39%2FRokoko_bord_av_valn%25C3%25B6tstr%25C3%25A4%252C_1700-talets_sista_h%25C3%25A4lft_-_Hallwylska_museet_-_108491.tif%2Flossy-page1-1200px-Rokoko_bord_av_valn%25C3%25B6tstr%25C3%25A4%252C_1700-talets_sista_h%25C3%25A4lft_-_Hallwylska_museet_-_108491.tif.jpg&imgrefurl=https%3A%2F%2Fru.wiktionary.org%2Fwiki%2F%25D1%2581%25D1%2582%25D0%25BE%25D0%25BB&tbnid=LsSM_xmtZlbcwM&vet=12ahUKEwirm_iV8Mj7AhVExrsIHXN0DqcQMygCegUIARDiAQ..i&docid=0ZTb6dvI6F446M&w=1200&h=1272&q=%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B0%20%D1%81%D1%82%D0%BE%D0%BB&ved=2ahUKEwirm_iV8Mj7AhVExrsIHXN0DqcQMygCegUIARDiAQ",
      },
      {
        id: 2,
        name: "Стол-2",
        price: 5000,
        rating: 2,
        img:
          "https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F3%2F39%2FRokoko_bord_av_valn%25C3%25B6tstr%25C3%25A4%252C_1700-talets_sista_h%25C3%25A4lft_-_Hallwylska_museet_-_108491.tif%2Flossy-page1-1200px-Rokoko_bord_av_valn%25C3%25B6tstr%25C3%25A4%252C_1700-talets_sista_h%25C3%25A4lft_-_Hallwylska_museet_-_108491.tif.jpg&imgrefurl=https%3A%2F%2Fru.wiktionary.org%2Fwiki%2F%25D1%2581%25D1%2582%25D0%25BE%25D0%25BB&tbnid=LsSM_xmtZlbcwM&vet=12ahUKEwirm_iV8Mj7AhVExrsIHXN0DqcQMygCegUIARDiAQ..i&docid=0ZTb6dvI6F446M&w=1200&h=1272&q=%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B0%20%D1%81%D1%82%D0%BE%D0%BB&ved=2ahUKEwirm_iV8Mj7AhVExrsIHXN0DqcQMygCegUIARDiAQ",
      },
    ];
    makeAutoObservable(this);
  }

  setTypes(types) {
    this._types = types;
  }

  setUser(brands) {
    this._brands = brands;
  }

  setUser(devices) {
    this._devices = devices;
  }

  get types() {
    return this._types;
  }
  get brands() {
    return this._brands;
  }
  get devices() {
    return this._devices;
  }
}
