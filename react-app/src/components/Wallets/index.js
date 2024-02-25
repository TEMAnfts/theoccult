import React from 'react'
import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react';
import { GetWallets } from '../../store/wallets';


function Wallets() {
	const dispatch = useDispatch();
	const [wallets, setWallets] = useState([]);

	useEffect(() => {
		const fetchWallets =  async () => {
			const response = await dispatch(GetWallets())
			if (response) {
                setWallets(response);
            }
		}
		fetchWallets();
	}, [dispatch])

	console.log(wallets, 'fromm component')
	return (
		<div>
            <h2>Wallets</h2>
            <ul>
                {wallets.map((wallet, index) => (
					<>
                    <li key={index}>{wallet.wallet_address}</li>
					<p>I should be considered because: {wallet.why}</p>
					</>
                ))}
            </ul>
        </div>
	)
}
export default Wallets