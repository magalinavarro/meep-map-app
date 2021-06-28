import React from "react";
class SearchBar extends React.Component {
  handleChange = (e) => {
    console.log(e.target.name, e.target.value);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.name, e.target.value);
  };

  render() {
    return (
      <React.Fragment>
        <div className="container-fluid">
          <div className="row input-container">
            <div>
              <form
                className="form-inline"
                onSubmit={this.handleSubmit}
                name="form"
              >
                <div className="input-size">
                  <input
                    name="InputForm"
                    type="text"
                    className="form-control"
                    id="inputPassword2"
                    placeholder="Buscar..."
                    onChange={this.handleChange}
                  />
                </div>
              </form>
            </div>
          </div>
          <hr />
        </div>
      </React.Fragment>
    );
  }
}

export default SearchBar;
