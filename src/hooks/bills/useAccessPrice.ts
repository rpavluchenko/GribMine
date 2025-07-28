import usePrice from './usePrice'

export default function useAccessPrice() {
  const { data, ...rest } = usePrice()

  const prices = {
    month: data?.price.find((p) => p.name.toLowerCase() === 'access_month'),
    forever: data?.price.find((p) => p.name.toLowerCase() === 'access_forever'),
  }

  const accessPrices = {
    month: prices.month && {
      ...prices.month,
      final: +(prices.month.price * (1 - prices.month.discount / 100)).toFixed(
        2
      ),
    },
    forever: prices.forever && {
      ...prices.forever,
      final: +(
        prices.forever.price *
        (1 - prices.forever.discount / 100)
      ).toFixed(2),
    },
  }

  return { accessPrices, ...rest }
}
