import { useMutation } from '@tanstack/react-query'
import axios, { type AxiosError } from 'axios'
import toast from 'react-hot-toast'

interface PaymentResponse {
  id: string
  url: string
}

interface PaymentRequest {
  email: string
  products?: Record<number, number>
  product_id?: number
  coupon?: string
}

const handlePaymentRequest = async ({
  email,
  products,
  product_id,
  coupon,
}: PaymentRequest): Promise<PaymentResponse> => {
  const response = await axios.post<PaymentResponse>(
    `${process.env.NEXT_PUBLIC_API_URL}/v1/bills/easydonate/checkout`,
    { email, products, product_id, coupon },
    {
      withCredentials: true,
    }
  )
  return response.data
}
export const useBuyMutation = () => {
  const mutation = useMutation<PaymentResponse, AxiosError, PaymentRequest>({
    mutationFn: handlePaymentRequest,
    onError() {
      toast.error('В данный момент сервер недоступен.')
    },
    onSuccess: ({ url }) => {
      window.location.href = url
    },
  })

  return { ...mutation, isLoading: mutation.isPending }
}
