import { format } from "date-fns"
import { ptBR } from "date-fns/locale"

const parseDate = (timestamp) => {
    const parsedDate = new Date(timestamp * 1000)
    return format(parsedDate, "pp", { locale: ptBR })
}
export default parseDate
