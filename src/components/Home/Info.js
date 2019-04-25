import React from "react"
import { Link } from "gatsby"
import Title from "../Globals/Title"

function Info({ buttonText, link }) {
  return (
    <section className="py-5">
      <div className="container">
        <Title title={"our story"} />
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted mb-5">
              Consectetur mollitia incidunt ullam accusamus non, sed Numquam
              consequuntur sunt dignissimos totam adipisci? Obcaecati saepe
              quaerat optio rem earum porro quo Recusandae reprehenderit
              incidunt nemo impedit laborum? Nulla quibusdam nemo accusantium et
              commodi Iste pariatur libero rerum sed blanditiis amet Cupiditate
              voluptas velit consequatur minus at quasi Dolor repellat fugiat!
            </p>
            <Link to={link}>
              <button className="btn text-uppercase btn-yellow">
                {buttonText}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Info
