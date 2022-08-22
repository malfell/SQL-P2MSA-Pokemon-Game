const React = require('react')
const Def = require('../default')

// pass in new data
function newForm (data) {
    return (
        <Def>
          <main>
            <h1>Add a New Mockmon</h1>
            <form method='POST' action='/mockmon'>
                {/* MOCKMON SPECIES */}
                <div className='form-group'>
                    <label htmlFor='species'>Species</label>
                    <input className='form-control' id='species' name='species' width="48" height="48" required />
                </div>

                {/* MOCKMON PICTURE */}
                <div className='form-group'>
                    <label htmlFor='image'>Image</label>
                    <input className='form-control' type='url' id='image' name='image' />
                </div>

                {/* MOCKMON SPRITE */}
                <div className='form-group'>
                    <label htmlFor='sprite'>Sprite</label>
                    <input className='form-control' type='url' id='sprite' name='sprite' />
                </div>

                {/* MOCKMON TYPE 1 */}
                <div className='form-group'>
                    <label htmlFor='type_1'>Type 1</label>
                    <input className='form-control' id='type_1' name='type_1' required />
                </div>

                
                {/* MOCKMON TYPE 2 */}
                <div className='form-group'>
                    <label htmlFor='type_2'>Type 2 (optional)</label>
                    <input className='form-control' id='type_2' name='type_2' />
                </div>

                {/* ABILITY*/}
                <div className='form-group'>
                    <label htmlFor='ability'>Ability</label>
                    <input className='form-control' id='ability' name='ability' />
                </div>

                {/* DEX ENTRY*/}
                <div className='form-group'>
                    <label htmlFor='dex_entry'>Dex Entry</label>
                    <input className='form-control' id='dex_entry' name='dex_entry' />
                </div>

                {/* Move 1 */}
                <div className='form-group'>
                    <label htmlFor='move_1'>Move #1</label>
                    <input className='form-control' id='move_1' name='move_1' />
                </div>
                {/* Move 2 */}
                <div className='form-group'>
                    <label htmlFor='move_2'>Move #2</label>
                    <input className='form-control' id='move_2' name='move_2' />
                </div>
                {/* Move 3 */}
                <div className='form-group'>
                    <label htmlFor='move_3'>Move #3</label>
                    <input className='form-control' id='move_3' name='move_3' />
                </div>
                {/* Move 4 */}
                <div className='form-group'>
                    <label htmlFor='move_4'>Move #4</label>
                    <input className='form-control' id='move_4' name='move_4' />

                {/* SUBMIT BUTTON */}
                <input className='btn btn-primary' type='submit' value='Add Mockmon' />
                </div>
            </form>
          </main>
        </Def>
    )
}

module.exports = newForm