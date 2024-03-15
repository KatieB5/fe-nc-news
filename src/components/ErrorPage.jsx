
export const ErrorPage = (message) => {
    return (
        <section id="error-page-section">
            <p>Looks like there's been an error!</p>
            <h3>{message.status}</h3>
            <p>{message.message}</p>
        </section>
    )
}