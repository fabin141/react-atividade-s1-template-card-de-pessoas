import './App.css';
import { Profile } from './components/Profile';


export const App = () => {
  const users = [
    {name: 'Gabriel',
     age: 19,
     pais: 'Brasil', 
    },
    {name: 'Felipe',
     age: 28,
     pais: 'Brasil', 
    },
    {name: 'Mariana',
     age: 24,
     pais: 'Itália', 
    }
  ]



  return (
    <div className="App">
      <h1>Usuarios</h1>

      {
        users.map((user, index) => 
          <Profile key={index} name={user.name} age={user.age} pais={user.pais} />
        )
      }


      {/* <Profile name='Vilson' age={23} />
      <Profile name='Nicole' age={28} />
      <Profile name='Alex' age={32} /> */}
      
      {/* <div>
        <span>Vilson - 21</span>
      </div>

      <div>
        <span>Nicole - 28</span>
      </div>

      <div>
        <span>Alex - 32</span>
      </div> */}
    </div>
  );
};

// SPA

// tags todas são fechadas
// for => htmlFor
// class => className

// props => atributos da Tag html
// children => conteúdo de Tag