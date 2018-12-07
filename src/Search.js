import React, {Component} from 'react';
import './Css/SearchStyle.css';

class Search extends Component {
    render() {
        return (


            <div className="Background">

            <div className="Search">

                <div className="Valikko">
                <select>
                    <option value="Gender">-Gender-</option>
                    <option value={this.props.male}>Male</option>
                    <option value={this.props.female}>Female</option>
                    </select>
                        <select>
                            <option value="Size">-Size-</option>
                            <option value={this.props.small}>Small</option>
                            <option value={this.props.medium}>Medium</option>
                            <option value={this.props.large}>Large</option>

                            </select>
                                <select>
                                    <option value="Age">-Age-</option>
                                    <option value={this.props.lessThan6Months}>Less than 6 months</option>
                                    <option value={this.props.sixMonthsTo3years}>6 months to 3 years</option>
                                    <option value={this.props.years3To10years}>3-10 years</option>
                                    <option value={this.props.plus10}>10+ years</option>
                                        </select>




                    {/*<input type="text" name="name" placeholder="Name" onChange={e => this.change(e)}/>*/}
<label className="button_search_box">
                    <button className="button_search" onClick={e => this.onSubmit(e)}>Search</button>

            </label>
                </div>





</div>

                <p>Tähän hakutulokset</p>
            </div>

        );
    }
}

export default Search;