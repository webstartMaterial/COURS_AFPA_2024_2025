import React from 'react'

function AddForm() {
  return (
    <div>

        <form action="">

            <div className='form-control'>
                <label htmlFor="">Todo</label>
                <input type="text" placeholder='Entrez un todo' />
            </div>

            <div className='form-control'>
                <label htmlFor="">Jour et heure</label>
                <input type="text" placeholder='Entrez un todo' />
            </div>

            <div className='form-control form-control-check'>
                <label htmlFor="">Ajouter un rappel</label>
                <input type="checkbox" />
            </div>

            <input type="submit" className='btn btn-block' value="Ajouter" />

        </form>
        
    </div>
  )
}

export default AddForm