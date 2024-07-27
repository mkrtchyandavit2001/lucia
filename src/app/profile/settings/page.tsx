"use client"

import { handleChangeLogin } from "@/app/lib/actions"
import { useActionState } from "react"

export default function(){
    const [state, handleChangeAction] = useActionState(handleChangeLogin, {message:""})
    return<>
        <h1 className="is-size-1">Change login</h1>
        <div className="columns">
        <div className="column is-two-fifths p-4">
          <form className="box" action={handleChangeAction}>
              {state?.message && <p style={{color:'red'}}>{state.message}</p>}
              <div className="field my-4">
                <input 
                  type="text" 
                  className="input is-dark"
                  name="login"
                  placeholder="please enter your login"
                />
                <input type="text"
                className="input is-dark my-2"
                name="newlogin"
                placeholder="please enter your new login"
                />
              </div>
              <button className="button is-success">Submit</button>
          </form>
        </div>
      </div>
    </>
}