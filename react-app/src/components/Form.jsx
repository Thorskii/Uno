export default class extends React.Component {
    constructor(props) {
      super(props);
  this.state = {
        name: "",
        email: "",
        feedback: "",
      };
    }
  handleInputChange(event) {
      event.preventDefault();
      const target = event.target;
      const name = target.name;
      const value = target.value;
  this.setState({ [name]: value });
    }

    render() {
        return (
          <div>
            <form
              className="ui form"
              id={this.props.id}
              name={this.props.name}
              method={this.props.method}
              action={this.props.action}
            >
              <textarea
                id="name"
                name="name"
                onChange={this.handleInputChange.bind(this)}
                placeholder="your name"
                required
                value={this.state.name}
                style={{ width: "100%" }}
                rows={1}
              />
              <br />
              <textarea
                id="email"
                name="email"
                onChange={this.handleInputChange.bind(this)}
                placeholder="your email address"
                required
                value={this.state.email}
                error={this.state.errors.email}
                style={{ width: "100%" }}
                rows={1}
              />
              <br />
              <textarea
                id="feedback"
                name="feedback"
                onChange={this.handleInputChange.bind(this)}
                placeholder="what would you like to chat about?"
                required
                value={this.state.feedback}
                style={{ width: "100%", height: "250px" }}
              />
              <br />
              <input
                type="button"
                value="Send"
                className="ui button"
                style={{
                  fontFamily: "Amatic SC",
                  fontSize: "20px",
                  color: "blue"
                }}
                onClick={this.sendMessage.bind(this)}
              />
            </form>
          </div>
        );
      }
    }