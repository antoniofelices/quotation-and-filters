import { useId } from 'react'

const Ongoing = ({ content }) => {
    const sectionId = useId()

    return (
        <section id={sectionId} className={`@container/header relative py-11`}>
            <h1>{content.title}</h1>
        </section>
    )
}

export default Ongoing
