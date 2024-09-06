import Wrapper from "@/components/Layout/Wrapper"
import Card from "@/components/UI/Card"

const Home = () => {
  return (
    <Wrapper>
      <Card className="column-all" title="Colum Span 1" description="Esta es una card de contenido para columnas" />
      <Card className="column-m-6 column-s-3 column-xxs-all" title="Colum Span 2" description="Esta es una card de contenido para columnas" />
      <Card className="column-m-6 column-s-3 column-xxs-all" title="Colum Span 3" description="Esta es una card de contenido para columnas" />
      <Card className="column-m-4 column-s-2 column-xxs-all" title="Colum Span 4" description="Esta es una card de contenido para columnas" />
      <Card className="column-m-4 column-s-2 column-xxs-all" title="Colum Span 5" description="Esta es una card de contenido para columnas" />
      <Card className="column-m-4 column-s-2 column-xxs-all" title="Colum Span 6" description="Esta es una card de contenido para columnas" />
    </Wrapper>
  )
}

export default Home
