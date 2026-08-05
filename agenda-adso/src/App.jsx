import "./App.css";
import ContactoCard from "./Components/ContactoCard"; 

export default function App() {
  const contactos = [
    {
      id: 1,
      nombre: "Carolina Pérez",
      telefono: "300 123 4567",
      correo: "carolina@sena.edu.co",
      etiqueta: "Compañera",
    },
    {
      id: 2,
      nombre: "Juan Díaz",
      telefono: "301 987 6543",
      correo: "juan@sena.edu.co",
      etiqueta: "Instructor",
    },
    {
      id: 3,
      nombre: "Luisa Martínez",
      telefono: "320 555 7788",
      correo: "luisa@sena.edu.co",
      etiqueta: "Cliente",
    },
    {
      id: 4,
      nombre: "Yoiner Velez Areiza",
      telefono: "320 666 3452",
      correo: "YoiVA@sena.edu.co",
      etiqueta: "Aprendiz",
    },
    {
      id: 5,
      nombre: "Leo Ramirez Gonzales",
      telefono: "320 567 8658",
      correo: "LEOR@sena.edu.co",
      etiqueta: "Aprendiz",
    },
  ];

  return (
    <main className="app-container">
      <h1 className="app-title">Agenda ADSO 📒</h1>

      <p className="app-subtitle">Contactos guardados</p>
      {contactos.map((c) => (
        <ContactoCard
          key={c.id}            
          nombre={c.nombre}    
          telefono={c.telefono} 
          correo={c.correo}     
          etiqueta={c.etiqueta} 
        />
      ))}

      <p className="app-nota">
        (Versión 0.1 - solo lectura, sin agregar ni editar todavía)
      </p>
    </main>
  );
}

