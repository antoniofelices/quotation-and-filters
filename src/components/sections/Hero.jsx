import { useId } from 'react'

const Hero = ({ classes, content }) => {
    const individualClasses = classes ? classes : ''
    const sectionId = useId()

    return (
        <section
            id={sectionId}
            className={`@container/header relative py-11 ${individualClasses}`}
        >
            <h1>{content.title}</h1>
        </section>
    )
}

export default Hero
