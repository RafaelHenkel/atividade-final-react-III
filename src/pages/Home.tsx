import ButtonDefault from '../components/button-default/ButtonDefault';
import PageDefault from '../config/layout/PageDefault';

function Home() {
  function handleClick() {
    alert('Apertou no botao da home.');
  }

  return (
    <>
      <PageDefault>
        <h1>Home</h1>
        <div style={{ textAlign: 'center' }}>
          <ButtonDefault label="Botão Home" action={handleClick} />
        </div>
      </PageDefault>
    </>
  );
}

export default Home;
