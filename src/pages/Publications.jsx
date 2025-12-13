import './Publications.css'

function Publications() {
  return (
    <div className="publications-page">
      <div className="page-header">
        <div className="container">
          <h1>Publications</h1>
          <p>Browse our published research and explore interdisciplinary scholarship</p>
        </div>
      </div>

      <section>
        <div className="container">
          <div className="issue-section">
            <div className="issue-header">
              <h2>Volume I, Issue I</h2>
              <p>Published: December 15th, 2025 (tentative date)</p>
            </div>

            <div className="inaugural-message">
              <p>
                We are thrilled to present the inaugural issue of <em>Audi Alteram Partem: Journal 
                of Law, Science, and Society</em>. This first edition brings together a collection of 
                interdisciplinary scholarship exploring the evolving intersections of law, science, 
                technology, and social systems. Our contributors examine topics ranging from the legal 
                and ethical implications of emerging artificial intelligence tools to public health 
                policy challenges to the social impact of forensic science practices.
              </p>
              <p>
                We invite you to engage with our very first volume and to share any thoughts or 
                feedback with us at <a href="mailto:aap.journal.edu@gmail.com">aap.journal.edu@gmail.com</a>. 
                Thank you for joining us at the beginning of this new chapter!
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Publications
