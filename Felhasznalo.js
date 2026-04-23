export default class Felhasznalo {
    #obj={}
constructor(obj, szuloElem) {
        this.#obj = obj;
        this.szuloElem = szuloElem;
        this.megjelenit()
    }

    megjelenit() {
        console.log(this.#obj);
        const u = this.#obj || {};
        const name = u.name ? `${u.name.firstname} ${u.name.lastname}` : (u.username || '');
        const address = u.address ? `${u.address.street} ${u.address.number}, ${u.address.city} ${u.address.zipcode}` : '';
        const geo = u.address && u.address.geolocation ? `Lat: ${u.address.geolocation.lat}, Long: ${u.address.geolocation.long}` : '';
        const kod = `<div class="user-card">
            <h3>${name}</h3>
            
            <p>Username: ${u.username || ''}</p>
            <p>Email: <a href="mailto:${u.email || ''}">${u.email || ''}</a></p>
            <p>Phone: ${u.phone || ''}</p>
            <p>Address: ${address}</p>
            <p>Geolocation: ${geo}</p>
        </div>`;
        this.szuloElem.insertAdjacentHTML("beforeend", kod);
    }

}
