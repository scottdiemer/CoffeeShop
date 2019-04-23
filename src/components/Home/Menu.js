import React, { Component } from "react"
import Title from "../Globals/Title"
import Img from "gatsby-image"

class Menu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: props.items.edges,
      coffeeItems: props.items.edges,
    }
  }

  render() {
    if (this.state.items.length) {
      return (
        <section class="menu py-5">
          <div class="container">
            <Title title="best of our menu" />
            {/* categories */}
            {/* items */}
            <div class="row">
              {this.state.coffeeItems.map(({ node }) => {
                return (
                  <div
                    key="{node.id}"
                    className="col-11 col-md-6 my-3 d-flex mx-auto"
                  >
                    <div>
                      <Img fixed={node.image.fixed} />
                    </div>
                    {/* item text */}
                    <div class="flex-grow-1 px-3">
                      <div class="d-flex justify-content-between">
                        <h6 class="mb-0">{node.title}</h6>
                        <h6 class="mb-0">${node.price}</h6>
                      </div>
                      <p class="text-muted">
                        <small>{node.description.description}</small>
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      )
    } else {
      return (
        <section className="menu -py-5">
          <div class="container">
            <Title title="best of our menu" />
            <div class="row">
              <div class="col-10 col-sm-6 mx-auto text-center text-capitalize">
                <h1>There are no items to display</h1>
              </div>
            </div>
          </div>
        </section>
      )
    }
  }
}

export default Menu
