import { useId } from 'react'

const Hero = ({ classes, title }) => {
    const individualClasses = classes ? classes : ''
    const sectionId = useId()

    return (
        <div
            id={sectionId}
            className={`@container/header relative py-4 ${individualClasses}`}
        >
            <h1 className="text-gray-900 dark:text-white">{title}</h1>
        </div>
    )
}

export default Hero
