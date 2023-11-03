import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';

const[heading, setHeading] = useState("");
const[subHeading, setSuHeading] = useState('');
const[description, setDescription] = useState("");
const[category, setCategory] = useState("");
const[author, setAuthor] = useState("");




const Createarticle = () => {
    return (
        <Fragment>
            <div className="mt-4 me-5 ms-5">
                <h3>Create Article</h3>

                <br />
                <br />


              <form >
                <div className="form-group">
                  <label htmlFor="formGroupExampleInput">Article Heading</label>
                  <input type="text" className="form-control" id="heading" value={heading} onChange={(e) => setHeading(e.target.value)}/>
                </div>
                <div className="form-group">
                  <label htmlFor="formGroupExampleInput">Sub Heading</label>
                  <textarea className="form-control" id="subHeading" value={subHeading} onChange={(e) => setSuHeading(e.target.value)} ></textarea>
                </div>
                <div className="form-group">
                  <label htmlFor="formGroupExampleInput">Description</label>
                  <textarea className="form-control" id="description" value={description} onChange={(e) => setDescription(e.target.value)} rows="3"></textarea>
                </div>
                <div className="form-group">
                  <label htmlFor="formGroupExampleInput">Article Category</label>
                  <input type="text" className="form-control" id="category" value={category} onChange={(e) => setCategory(e.target.value)}/>
                </div>
                <div className="form-group">
                  <label htmlFor="formGroupExampleInput">Author Name</label>
                  <input type="text" className="form-control" id="author" value={author} onChange={(e) => setAuthor(e.target.value)}/>
                </div>

                <button type="submit" className="btn btn-primary">Save Article</button>
                <button>
                {/* <Link><button type="button" className="btn">Cancel</button></Link> */}
                link
                </button>
               
              </form>
            </div>
        </Fragment>
    );
};

export default Createarticle;