import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import React from 'react'

const Home = () => {
  const loggedIn= {firstName: "Frey", lastName: "Vegda", email: "freyvegda@gmail.com"}

  return (
    <section className="home">
        <div className="home-content">
            <header className="home-header">
                <HeaderBox
                    type="greeting"
                    title= "Welcome"
                    user= {loggedIn?.firstName || 'Guest'}
                    subtext= "Access and Manage your Account and Transactions"
                />

                <TotalBalanceBox
                  accounts = {[]}
                  totalBanks= {1}
                  totalCurrentBalance= {1200.35}
                />
            </header>
            Recent Transaction
        </div>

        <RightSidebar
          user={loggedIn}
          transaction ={[]}
          banks = {[{currentBalance: 1200.35}, {currentBalance: 2500}]}
        />
    </section>
  )
}

export default Home