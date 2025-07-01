import { useId } from 'react'
import Button from '@components/base/Button'
import { useRequestQuotationContext } from '@hooks/useRequestQuotationContext'

const FormQuotation = ({ content }) => {
    const userNameId = useId()
    const phoneId = useId()
    const emailId = useId()
    const { summaryHandler } = useRequestQuotationContext()

    return (
        <form onSubmit={summaryHandler} className="py-6">
            <div className="grid gap-4 lg:grid-cols-12 lg:justify-items-start">
                <div className="relative w-full lg:col-span-3">
                    <label htmlFor={emailId} className="sr-only">
                        {content.labelUserName}
                    </label>
                    <input
                        type="text"
                        name="clientname"
                        id={userNameId}
                        className="w-full rounded-lg bg-white px-4 py-2 text-sm font-bold placeholder-gray-900 dark:text-white dark:bg-gray-600 dark:placeholder-white border border-gray-900 dark:border-gray-600 invalid:border-1 invalid:border-red focus:outline-none"
                        placeholder={content.labelUserName}
                        required
                    />
                </div>

                <div className="relative w-full lg:col-span-3">
                    <label htmlFor={phoneId} className="sr-only">
                        {content.labelPhone}
                    </label>
                    <input
                        type="text"
                        name="phone"
                        id={phoneId}
                        className="w-full rounded-lg bg-white px-4 py-2 text-sm font-bold placeholder-gray-900 dark:text-white dark:bg-gray-600 dark:placeholder-white border border-gray-900 dark:border-gray-600 invalid:border-1 invalid:border-red focus:outline-none"
                        placeholder={content.labelPhone}
                        required
                    />
                </div>
                <div className="relative w-full lg:col-span-3">
                    <label htmlFor={emailId} className="sr-only">
                        {content.labelEmail}
                    </label>
                    <input
                        type="email"
                        name="email"
                        id={emailId}
                        className="w-full rounded-lg bg-white px-4 py-2 text-sm font-bold placeholder-gray-900 dark:text-white dark:bg-gray-600 dark:placeholder-white border border-gray-900 dark:border-gray-600 invalid:border-1 invalid:border-red focus:outline-none"
                        placeholder={content.labelEmail}
                        required
                    />
                    <p className="message-error absolute top-[2.5rem] left-0 hidden w-full bg-red px-2 text-left text-sm text-white">
                        {content.textError}
                    </p>
                </div>
                <Button
                    type="submit"
                    classes={`w-full lg:col-span-3`}
                    text={content.textButton}
                    variant="red"
                />
            </div>
        </form>
    )
}

export default FormQuotation
