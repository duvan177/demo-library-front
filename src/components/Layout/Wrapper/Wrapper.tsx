interface WrapperProps {
  children: React.ReactNode
  className?: string;
}

const Wrapper = ({ children, className = 'home-section-grid' }: WrapperProps) => {
  return (
    <section className={`home-section ${className}`} >
      {children}
    </section >
  )
}

export default Wrapper
