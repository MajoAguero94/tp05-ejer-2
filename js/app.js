class Persona {
    constructor(nombre, edad, sexo, peso , altura, nacimiento){
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
        this.nacimiento = nacimiento;}



    mostrarGeneracion () {
      if ((this.nacimiento > 1929) & (this.nacimiento < 1949)) {
      alert(
        "Pertenece a la generacion SILENT GENERATION - Rasgo caracteristico AUSTERIDAD "
      );
    } else if ((this.nacimiento > 1948) & (this.nacimiento < 1969)) {
      alert(
        "Pertenece a la generacion BABY BOOM - Rasgo caracteristico AMBICION "
      );
    } else if ((this.nacimiento > 1968) & (this.nacimiento < 1981)) {
      alert(
        "Pertenece a la generacion X - Rasgo caracteristico OBSESION POR EL EXITO "
      );
    } else if ((this.nacimiento > 1980) & (this.nacimiento < 1994)) {
      alert(
        "Pertenece a la generacion Y MILLENNIALS - Rasgo caracteristico FRUSTACION "
      );
    } else if ((this.nacimiento > 1993) & (this.nacimiento < 2011)) {
      alert(
        "Pertenece a la generacion Z - Rasgo caracteristico IRREVERENCIA "
      );
    } else alert("No tiene generacion asignada");
  }
    mayorEdad(){
        if (this.nacimiento <= 2004) {
           alert(" Es mayor de Edad");
        } else alert("Es menor de edad");
    }
    mostrarDatos(){
        document.write(`<ul>
           <li>Nombre: ${this.nombre}  </li>
           <li>Edad: ${this.edad} </li>
           <li>Sexo: ${this.sexo} </li>
           <li>Peso: ${this.peso} </li>
           <li>Altura: ${this.altura} </li>
           <li>Año nacimiento: ${this.nacimiento} </li>
           </ul>`);
          }
        }


        
        document.getElementById('produc-form').addEventListener('submit', function(e){

        
          let nombre = document.getElementById('nombre').value
          console.log(document.getElementById('nombre').value)
          let edad = document.getElementById('edad').value
          console.log(document.getElementById('edad').value)
          let sexo = document.getElementById('sexo').value
          console.log(document.getElementById('sexo').value)
          let peso = document.getElementById('peso').value
          console.log(document.getElementById('peso').value)
          let altura = document.getElementById('altura').value
          console.log(document.getElementById('altura').value)
          let nacimiento = document.getElementById('nacimiento').value
          console.log(document.getElementById('nacimiento').value)

          let personaNueva = new Persona (nombre, edad, sexo, peso, altura, nacimiento);

        

            document.getElementById("edad").addEventListener("click", personaNueva.mayorEdad())
            
            document.getElementById("generacion").addEventListener("click", personaNueva.mostrarGeneracion())
            
            
          
           
            
            
          

          e.preventDefault();})
        
        
        
         
     
    
    
   

    

    
  

  
 