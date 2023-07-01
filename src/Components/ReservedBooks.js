import React from 'react'
import './ReservedBooks.css'

function ReservedBooks() {
    return (
        <div className='reservedbooks-container'>
            <h className='reservedbooks-title'>Upcoming Titles.!</h>
            <table className='reservedbooks-table'>
                <tr>
                    <th>Author</th>
                    <th>Book</th>
                    <th>Date</th>
                </tr>
                <tr>
                    <td>Karin Tanabe</td>
                    <td>The Sunset Crowd</td>
                    <td>04/07/2023</td>
                </tr>
                <tr>
                    <td>Katherine Center</td>
                    <td>Hello Stranger</td>
                    <td>11/07/2023</td>
                </tr>
                <tr>
                    <td>Colson Whitehead</td>
                    <td>Crook Manifesto</td>
                    <td>18/07/2023</td>
                </tr>
                <tr>
                    <td>Chandler Baker</td>
                    <td>Cutting Teeth</td>
                    <td>18/07/2023</td>
                </tr>
                <tr>
                    <td>Daniel Silva</td>
                    <td>The Collector</td>
                    <td>18/07/2023</td>
                </tr>
                <tr>
                    <td>Jamie Day</td>
                    <td>The Block Party</td>
                    <td>18/07/2023</td>
                </tr>
            </table>
        </div>
    )
}

export default ReservedBooks
