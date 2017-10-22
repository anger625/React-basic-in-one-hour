var Product = React.createClass({
  getInitialState: function() {
    return {
      qty: 0
    };
  },
  buy: function() {
    this.setState({
      qty: this.state.qty + 1
    });
    this.props.handleTotal(this.props.price);
  },
  show: function() {
    this.props.handleShow(this.props.name);
  },
  render: function() {
    return ( < div >
      < p > {
        this.props.name
      } - $ {
        this.props.price
      } < /p> < button onClick = {
        this.buy
      } > Buy < /button> < button onClick = {
        this.show
      } > Show < /button> < h3 > Qty: {
        this.state.qty
      }
      item(s) < /h3> < hr / >
      < /div>
    );
  }
});

var Total = React.createClass({
  render: function() {
    return ( < div >
      < h3 > Total: $ {
        this.props.total
      } < /h3> < /div>
    );
  }
});

var ProductList = React.createClass({
  getInitialState: function() {
    return {
      total: 0,
      productList: [{
        name: "iPhone",
        price: 28000
      }, {
        name: "S7",
        price: 32000
      }, {
        name: "U11",
        price: 25000
      }]
    };
  },
  calcTotal: function(price) {
    this.setState({
      total: parseInt(this.state.total) + parseInt(price)
    });
  },
  showProduct: function(name) {
    alert("Select one " + name);
  },
  render: function() {
    var component = this;
    var products = this.state.productList.map(function(elem) {
      return ( < Product name = {
          elem.name
        }
        price = {
          elem.price
        }
        handleShow = {
          component.showProduct
        }
        handleTotal = {
          component.calcTotal
        }
        />
      );
    });

    return ( < div > {
        products
      } < Total total = {
        this.state.total
      }
      /> < /div>
    );
  }
});

ReactDOM.render( < ProductList / > , document.getElementById('root'));
