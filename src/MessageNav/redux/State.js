const initialState = {
  /**
   * > Every message has a unique id | Add Message with id = `last_id + 1`
   */
  last_id: 0,

  /**
   * ### List Of Messages
   *
   * **Example:**
   *
   * ```
   * [
   *    {
   *        type: 'error | info | warning',
   *        text: '.....message text......'
   *    },
   *    // ...
   * ]
   * ```
   *
   */
  messages: [],
};

export default initialState;
