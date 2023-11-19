import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';

function Home() {
    const [input, setInput] = useState("");

    function TableData() {
        if (input.trim() === "") {
            // If there is no input, return blank content
            return null;
        }

        const reversedInput = input.split('').reverse().join('');

        return (
            <Table striped bordered hover className="table table-striped table-bordered table-hover container mt-3">
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Option</th>
                        <th>Output</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Capitalize the first letter</td>
                        <td>{input.charAt(0).toUpperCase() + input.slice(1)}</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Convert into lower string</td>
                        <td>{input.toLowerCase()}</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Convert into upper string</td>
                        <td>{input.toUpperCase()}</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Reverse string</td>
                        <td>{input.split('').reverse().join('')}</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Is palindrome</td>
                        <td>{input.toLowerCase() === reversedInput.toLowerCase() ? 'yes' : 'no'}</td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>Length of String</td>
                        <td>{input.length}</td>
                    </tr>
                </tbody>
            </Table>
        );
    }

    return (
        <div className='container p-3'>
            <h1 className='container mt-3 mb-2'>Enter Your String Here</h1>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center" , fontSize:"1.5rem"}}>
                <input
                    type="text"
                    placeholder='Enter text here'
                    onChange={(e) => setInput(e.target.value)}
                    className='container mt-2'
                />
            </div>

            <TableData />
        </div>
    );
}

export default Home;
