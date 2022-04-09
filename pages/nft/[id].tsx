import React from 'react'
import { useAddress, useDisconnect, useMetamask } from '@thirdweb-dev/react'

function NFTDropPage() {
  //Auth
  const connectWithMetamask = useMetamask()
  const address = useAddress()
  const disconnect = useDisconnect()

  return (
    <div>
      {/* Left */}
      <div className="flex h-screen flex-col lg:grid lg:grid-cols-12">
        <div className="bg-gradient-to-br from-[#86E3CE] to-[#DDE6A5] lg:col-span-4">
          <div className="flex flex-col items-center justify-center py-2 lg:min-h-screen">
            <div className="rounded-xl bg-gradient-to-br from-[#86E3CE] to-[#d7e290] p-1">
              <img
                className="h-44 rounded-xl object-cover lg:h-96 lg:w-96"
                src="https://res.cloudinary.com/croissain/image/upload/v1649469894/nft-challenge/nftmonkey_eja8fq.jpg"
                alt="monkey nft picture"
              />
            </div>
            <div className="space-y-2 p-5 text-center">
              <h1 className="text-3xl font-bold text-white drop-shadow-lg">
                <p>
                  <span className="font-serif font-thin italic">croissain</span>{' '}
                  Bores Ape
                </p>
              </h1>
              <h2 className="text-xl font-bold text-white drop-shadow-lg">
                A collection of croissain Bores Ape NFTs
              </h2>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="flex flex-1 flex-col p-12 lg:col-span-8">
          {/* Header */}
          <header className="flex items-center justify-between">
            <h1 className="w-52 cursor-pointer text-xl font-extralight sm:w-80">
              The{' '}
              <span className="font-serif font-extrabold italic text-black underline decoration-teal-400/50">
                croissain
              </span>{' '}
              NFT Market Place
            </h1>
            <button
              className="hover: rounded-full border-2 border-teal-500 px-4 py-2 text-xs font-bold text-teal-500 transition-all hover:border-white hover:bg-gradient-to-br hover:from-teal-400 hover:to-[#DDE6A5] hover:text-white lg:px-5 lg:py-3 lg:text-base"
              onClick={() => (address ? disconnect() : connectWithMetamask())}
            >
              {address ? 'Sign Out' : 'Sign In'}
            </button>
          </header>
          <hr className="my-2 border" />
          {address ? (
            <p className="text-center text-sm leading-7 text-teal-500">
              You're connected with Metamask | Wallet {address.substring(0, 5)}
              ..{address.substring(address.length - 5)}
            </p>
          ) : (
            <br />
          )}

          {/* Content */}
          <div className="mt-10 flex flex-1 flex-col items-center space-y-6 text-center lg:space-y-0">
            <img
              className="h-80 w-80 object-cover pb-10 lg:h-96 lg:w-96"
              src="https://danviet.mediacdn.vn/296231569849192448/2022/1/12/1-16419529173701854733738.jpg"
              alt="nft artwork"
            />
            <h1 className="text-3xl font-bold lg:text-5xl lg:font-extrabold">
              Do NFTs harm the enviroment?
            </h1>
            <h1 className="pt-10 text-3xl font-bold lg:text-5xl lg:font-extrabold">
              <span className="bg-black px-5 italic">
                <span className="text-teal-300">NF</span>
                <span className="text-white">Ts</span>
                <span className="text-red-600"> Drop</span>
              </span>{' '}
            </h1>
            <p className="pt-2 text-xl text-teal-500">13 / 21 NFT's claimed</p>
          </div>
          {/* Mint button */}
          <button className="mt-10 h-16 w-full rounded-full bg-red-600 font-bold text-white">
            Mint NFT (0.01 ETH)
          </button>
        </div>
      </div>
    </div>
  )
}

export default NFTDropPage
