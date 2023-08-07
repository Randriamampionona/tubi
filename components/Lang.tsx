const LANG = ["EN", "FR", "MLG"]

const Lang = () => {
  return (
    <label htmlFor="lang" className="p-[.4rem] bg-zinc-800 rounded select-none">
      <select className="bg-zinc-800 text-zinc-50 outline-none" id="lang" name="lang" defaultValue={"EN"}>
            {
                LANG.map(l => (
                    <option key={l} value={l}>{l}</option>
                ))
            }
      </select>
    </label>
  )
}

export default Lang
