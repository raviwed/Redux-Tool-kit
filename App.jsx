import React, { useCallback, useEffect, useMemo, useState } from "react"
import './App.css'
import { useDispatch, useSelector } from "react-redux"
import { AppData, getCounter } from "./Redux/Slice/authSlice"
import { getProgram } from "./Redux/Slice/programmeSlice"

function App() {
  const count = useSelector((state) => state.auth.count)
  const Data = useSelector((state) => state.auth.appData)
  const programme = useSelector((state) => state.programme.programme)
  const dispath = useDispatch()
  const handleClick = useCallback(() => {
    dispath(getCounter())
  }, [count])

  useEffect(() => {
    (async () => {
      dispath(AppData())
    })()
  }, [])

  useEffect(() => {
    dispath(getProgram({ name: "raviteja", roll: 20, level: "intermediate" }))
  }, [])

  return (
    <div>
      <p onClick={handleClick} className="text-center mt-3">Raviteja {count} {programme.name}{programme.roll} {programme.level}</p>
      <div className="px-4 m-4" >
        <div class="row gx-5 ">
          {
            Data && Data.map((el) => {
              return (
                <div key={el.id} class="col-lg-3 col-md-4 col-sm-12  py-4 ">
                  <div class=" p-3 border rounded-3 h-100  bg-danger  w-100">
                    <p className="m-0" >titel :- {el.category}</p>
                    <p className="m-0" >description :- {el.title}</p>
                    <p className="m-0" >RS :- {el.price}</p>
                    <img className="w-100" src={el.image} />
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default App
