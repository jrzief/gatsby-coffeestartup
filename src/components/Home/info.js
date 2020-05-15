import React from "react"
import { Link } from "gatsby"
import Title from "../Globals/Title"

export default function Info() {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="our story"></Title>
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted mb-5">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus
              magnam adipisci doloremque voluptatem molestias! Ipsum, numquam
              reiciendis molestiae corrupti nesciunt alias earum delectus
              laudantium hic voluptate vel repellendus voluptatem! Excepturi at
              vel natus laboriosam qui corporis error, facere impedit eveniet
              deserunt sunt commodi sequi accusamus obcaecati cumque atque enim
              officia.
            </p>
            <Link to="/about/">
              <button className="btn text-uppercase btn-yellow">
                about page
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
